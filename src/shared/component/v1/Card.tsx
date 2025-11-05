
const Card = ({ title, desc }) => {
  return (
    <div className="bg-[#0f0f0f] border border-white/10 p-5 rounded-xl hover:border-white/30 transition">
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  );
};

export default Card;
