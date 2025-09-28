export const metadata = {
  title: 'Child training',
  description: 'Child training programm.',
}

export default async function Children ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <div>
            <h1>Children Page</h1>
        </div>
    );
}