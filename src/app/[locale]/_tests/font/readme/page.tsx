generateMetadata
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">🚀 Personal All-in-One Panel Roadmap</h1>
          <p className="text-gray-600 italic mt-2">"Because I hate load times (cloudflare ugh), and not owning my own stuff"</p>
          <p className="text-sm text-gray-500 mt-1">Just started this repo, will be migrating features I've built over so it's far from done. And probably never will be.</p>
        </header>

        <main>
          <section className="my-10">
            <h2 className="text-3xl font-bold">Description</h2>
            <p>This is a personal project that combines various tools and features I've built over the years. It's a one-stop solution for managing personal finance, secure file storage, code snippets, and tools I've built for myself such as URL/text extractors, (reverse) geolocation finder, SVG to CSS-pseudo elements, HTML to JSX/TSX converter, and loads more probably.</p>
          </section>

          <section className="my-10">
            <h2 className="text-3xl font-bold">🎨 Design Inspiration</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://www.hover.dev/templates/demo/the-startup" className="text-blue-500 hover:underline">SaaS landing with dope bento glass style</a></li>
              <li><a href="https://vercel.com/blog/deploy-summary" className="text-blue-500 hover:underline">Vercel blog page with cool gradient</a></li>
              <li><a href="https://supabase.com/dashboard/projects" className="text-blue-500 hover:underline">Supabase dashboard - loaders, collapse menu</a></li>
            </ul>
          </section>

          <section className="my-10">
            <h2 className="text-3xl font-bold">Too Fancy UI Stuff</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Spark effect <a href="https://codepen.io/hexagoncircle/details/bGZdWyw" className="text-blue-500 hover:underline">[source]</a></li>
              <li>Dark glow button <a href="https://codepen.io/collinsworth/pen/zYepgqG" className="text-blue-500 hover:underline">[source]</a></li>
              <li>Glow card <a href="https://codepen.io/jh3y/pen/MWxgJXY" className="text-blue-500 hover:underline">[source]</a></li>
              <li>Menu animation <a href="https://codepen.io/jh3y/pen/GRapZqO" className="text-blue-500 hover:underline">[source]</a></li>
              <li>Card anchor effect <a href="https://codepen.io/jh3y/pen/MWLyGxo" className="text-blue-500 hover:underline">[source]</a></li>
            </ul>
          </section>

          <section className="my-10">
            <h2 className="text-3xl font-bold">🛠️ Features</h2>
            <p>Frontend: NextJS 15, TypeScript, and more...</p>
          </section>

          <section className="my-10">
            <h2 className="text-3xl font-bold">🛣️ Roadmap and To-Do</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Implement dark mode</li>
              <li>Add more features</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
