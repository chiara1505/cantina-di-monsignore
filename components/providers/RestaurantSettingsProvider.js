'use client'

import { createContext, useContext } from 'react'
import { DEFAULT_RESTAURANT_SETTINGS } from '@/lib/restaurantSettingsDefaults'

const RestaurantSettingsContext = createContext(DEFAULT_RESTAURANT_SETTINGS)

export function RestaurantSettingsProvider({ settings, children }) {
  return (
    <RestaurantSettingsContext.Provider value={settings ?? DEFAULT_RESTAURANT_SETTINGS}>
      {children}
    </RestaurantSettingsContext.Provider>
  )
}

export function useRestaurantSettings() {
  return useContext(RestaurantSettingsContext)
}
