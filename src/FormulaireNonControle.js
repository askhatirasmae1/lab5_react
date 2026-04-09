import { useRef } from 'react';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom: ${nomRef.current.value}, Email: ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nomRef} type="text" placeholder="Nom" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireNonControle;