export default function PageTitle(props: {children: React.ReactNode}){
    const { children } = props;
   
    return(
        <div className="text-2xl font-bold md:text-4xl">
            <h1>{children}</h1>
        </div>
    )
}