'use client'

import React, { useEffect, useState } from 'react'
import { toast, useConfig } from '@payloadcms/ui'
import type { DefaultCellComponentProps } from 'payload'

export default function VisibleToggleCell(props: DefaultCellComponentProps) {
  const { cellData, collectionSlug, field, rowData } = props
  const { config } = useConfig()
  const [checked, setChecked] = useState(Boolean(cellData))
  const [pending, setPending] = useState(false)

  useEffect(() => {
    setChecked(Boolean(cellData))
  }, [cellData])

  const fieldName = typeof field?.name === 'string' ? field.name : 'published'
  const apiBase = config?.routes?.api || '/api'

  const onToggle = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    const nextValue = event.target.checked
    const previous = checked
    setChecked(nextValue)
    setPending(true)

    try {
      const response = await fetch(`${apiBase}/${collectionSlug}/${rowData.id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          [fieldName]: nextValue,
        }),
      })

      if (!response.ok) {
        throw new Error('Aggiornamento non riuscito')
      }

      toast.success(nextValue ? 'Visibile sul sito' : 'Nascosto dal sito')
    } catch (error) {
      setChecked(previous)
      toast.error(error instanceof Error ? error.message : 'Errore durante il salvataggio')
    } finally {
      setPending(false)
    }
  }

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: pending ? 'wait' : 'pointer',
        userSelect: 'none',
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={pending}
        onChange={onToggle}
        aria-label={checked ? 'Visibile' : 'Nascosto'}
      />
      <span style={{ fontSize: '0.85rem', opacity: pending ? 0.6 : 1 }}>
        {checked ? 'Visibile' : 'Nascosto'}
      </span>
    </label>
  )
}
