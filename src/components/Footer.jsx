export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="muted">© {new Date().getFullYear()} Snehil Kumbhani</p>
        <div className="flex items-center gap-3">
          <a className="btn btn-ghost" href="https://github.com/snehilkumbhani" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/snehilkumbhani/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" target="_blank" rel="noreferrer">Indeed</a>
        </div>
      </div>
    </footer>
  )
}