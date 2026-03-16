export async function generateStaticParams() {
  return [{ number: '404' }, { number: '500' }]
}

import ErrorClient from './ErrorClient'

export default function Page({ params }) {
  return <ErrorClient number={params.number} />
}