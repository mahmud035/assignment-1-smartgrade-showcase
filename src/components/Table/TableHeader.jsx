const TableHeader = () => {
  return (
    <tr className="border-b border-[#FFFFFF0D]">
      <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
        ID
      </th>
      <th className="p-5 text-sm font-semibold text-left md:text-xl">Name</th>
      <th className="p-5 text-sm font-semibold md:text-xl">Scores</th>
      <th className="p-5 text-sm font-semibold md:text-xl">Percentage</th>
    </tr>
  );
};

export default TableHeader;
