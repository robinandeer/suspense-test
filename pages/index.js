import Link from "next/link";

export default function IndexPage() {
  return (
    <ul>
      <li><Link href="/1">Step 1</Link></li>
      <li><Link href="/2">Step 2</Link></li>
      <li><Link href="/3">Step 3</Link></li>
      <li><Link href="/4">Step 4</Link></li>
      <li><Link href="/5">Step 5</Link></li>
    </ul>
  )
}
