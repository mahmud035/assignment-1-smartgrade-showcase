import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';
import ClassName from './ClassName';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setStudentData(data));
  }, []);

  const classOneStudents = studentData.filter(
    (student) => student.class === 'One'
  );

  const classTwoStudents = studentData.filter(
    (student) => student.class === 'Two'
  );

  const classThreeStudents = studentData.filter(
    (student) => student.class === 'Three'
  );

  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>

          {/* SearchBox  */}
          <SearchBox />
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {/* Class One  */}
              <ClassName studentClassName="One" />
              {classOneStudents.map((student, index) => (
                <TableRow student={student} key={student.id} index={index} />
              ))}

              {/* Class Two  */}
              <ClassName studentClassName="Two" />
              {classTwoStudents.map((student, index) => (
                <TableRow student={student} key={student.id} index={index} />
              ))}

              {/* Class Three  */}
              <ClassName studentClassName="Three" />
              {classThreeStudents.map((student, index) => (
                <TableRow student={student} key={student.id} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
