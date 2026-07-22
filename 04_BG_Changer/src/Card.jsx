function Card({ name, color = `bg-${red}-500` }) {
    return (
        <div className={`${color} text-white px-4 py-2 rounded-full min-w-[100px] h-10 flex items-center justify-center`}>
            {name}
        </div>
    );
}

export default Card;