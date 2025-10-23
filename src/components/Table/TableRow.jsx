const TableRow = ({ student, index }) => {
  const { name, scores, percentage, avatar } = student;

  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex items-center space-x-3">
          <img
            className="w-8 h-8 rounded-full"
            src={avatar}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      </td>
      <td className="p-5 text-sm text-center md:text-xl">{scores}</td>
      <td className="p-5 text-sm text-center md:text-xl">{percentage}</td>
    </tr>
  );
};

export default TableRow;
