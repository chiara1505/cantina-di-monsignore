export default function MenuDecorativePanel({ title, children }) {
  return (
    <div className="dishes-menu-panel">
      <div className="menu-course-card__shape" aria-hidden="true">
        <div
          className="menu-course-card__shape-top"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-3.png)' }}
        />
        <div
          className="menu-course-card__shape-bottom"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-4.png)' }}
        />
      </div>
      {title ? <h2 className="dishes-menu-panel__title">{title}</h2> : null}
      {children}
    </div>
  );
}
