export default function Section({title, subtitle, children}){
  return (
    <section className="container py-14 md:py-20">
      {title && (
        <header className="mb-8 text-center">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="mt-2 muted">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  )
}