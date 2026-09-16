interface ServiceSectionHeaderProps {
    title: string;
}

export default function ServiceSectionHeader({ title }: ServiceSectionHeaderProps) {
    return (
        <div className="w-full flex flex-row items-center justify-center mt-20 mb-10">
            <h2 className="text-4xl font-black uppercase whitespace-nowrap">
                [ {title} ]
            </h2>
        </div>
    );
}