export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}
    <a href="http://localhost:3000/specialites/slam">spécialité SLAM</a><br/>
    <a href="http://localhost:3000/specialites/sisr">spécialité SISR</a>
    </section>
  }