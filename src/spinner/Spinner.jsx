// Spinner.jsx
import { Oval } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
      <Oval
        height={60}
        width={60}
        ariaLabel="loading"
      />
    </div>
  );
}
