export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1> Hydrojan is in under progress</h1>
          <h4>planned features:</h4>
          <li className="mb-2">
            transparent dynamic and responsive header
          </li>
          <li className="mb-2">
            Color changing theme facility
          </li>
          <li className="mb-2">
            Dynamic 3d view for the UAV.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       <p>the updates will be visible in a daily basis.
       Thank you for being with Dreams Of Bangladesh</p>
      </footer>
    </div>
  );
}
