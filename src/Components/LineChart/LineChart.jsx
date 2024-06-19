import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChart = () => {
  const marksData = [
    { subject: 'Math', marks: 85 },
    { subject: 'Science', marks: 90 },
    { subject: 'History', marks: 78 },
    { subject: 'English', marks: 92 },
    { subject: 'Geography', marks: 88 },
  ];

  return (
    <div className='mt-20'>
      <div className='w-11/12 h-96 mx-auto'>
        <ResponsiveContainer width="100%" height="100%">
          <LChart data={marksData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="marks" stroke="#8884d8" />
          </LChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
