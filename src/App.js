import { useState } from 'react';
import './App.css';

import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import { UtilisateurContext } from './UtilisateurContext';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true,
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="container">
        <h1>TP React Débutant</h1>

        <h2>Formulaire Contrôlé</h2>
        <FormulaireControle />

        <h2>Formulaire Non-Contrôlé</h2>
        <FormulaireNonControle />

        <h2>Lifting State Up</h2>
        <TemperatureConvertor />

        <h2>Profil Utilisateur</h2>
        <Profil />
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;