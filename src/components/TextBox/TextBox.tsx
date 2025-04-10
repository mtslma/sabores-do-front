export default function TextBox(props: { children: React.ReactNode }) {
    const { children } = props;
    return <div className="flex flex-col gap-2 justify-center items-center border-2 border-emerald-600 dark:border-emerald-400 rounded-xl p-4 text-lg text-justify md:max-w-2/4">{children}</div>;
}
