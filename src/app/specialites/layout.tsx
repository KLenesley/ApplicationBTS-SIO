export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><a href="http://localhost:3000/specialites/sisr">spécialité SISR</a>{children}
    <a href="http://localhost:3000/specialites/slam">spécialité SLAM</a></section>
  }