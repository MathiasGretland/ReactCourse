
const Svar = ({ tekst, erRiktig }) => {


  return (
    <h3>
        {tekst} {erRiktig ? ' - Riktig' : ' - Galt'}
    </h3>
  );
}

export default Svar;
