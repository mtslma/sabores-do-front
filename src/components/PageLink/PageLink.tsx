import Link from "next/link";

export default function PageLink(props: { href: string; children: React.ReactNode }) {
    const { href, children } = props;

    return (
        <Link className="px-8 py-2 bg-emerald-500 border-2 border-emerald-900 dark:bg-emerald-900 dark:border-emerald-400 rounded-2xl hover:bg-emerald-700" href={href}>
            <p className="text-xl text-white font-bold">{children}</p>
        </Link>
    );
}
