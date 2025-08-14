    function log(line){
      const p = document.createElement('div');
      const ts = new Date().toLocaleTimeString();
      p.textContent = `[${ts}] ${line}`;
      logEl.appendChild(p);
      logEl.scrollTop = logEl.scrollHeight;
    }

    function fakeStep(text, delay=2000){
      return new Promise(res => setTimeout(()=>{ log(text); res(); }, delay));
    }

    async function runFake(){
      startBtn.disabled = true;
      logEl.innerHTML = '';
      reveal.style.display = 'none';
      bar.style.width = '0%';

      const user = (userEl.value || 'unbekannt').trim();
      const amount = amountEl.value;

      const steps = [
        `Verbinde zu „Roblox Balance API“…`,
        `Benutzer „${user}“ gefunden.`,
        `Überprüfe Anti-Bot-Token…`,
        `Allokiere ${amount} im Zwischenspeicher…`,
        `Synchronisiere mit globalem Knoten…`,
        `Fehler: Menschliche Verifikation benötigt.`,
        `Leite zu „Umfrage/Download“ weiter…`,
        `Verifikation fehlgeschlagen. Wiederhole…`,
        `Wiederhole…`,
        `Robux Code wird generiert...`,
        `Robux werden überwiesen...`,
        `Fehlgeschlagen: Kein Zugang...`,
        `Grund: Passwort notwendig...`,
        `Passwort übertragen...`,
        `Erneuter Versuch...`,
        `Wiederhole...`,
        `Robux werden überwiesen...`,
        `Fast geschafft!`,
        `Geschafft! Guck gleich in dein Account!`
      ];

      for (let i=0;i<steps.length;i++){
        await fakeStep(steps[i], 1000 + Math.random()*1000);
        bar.style.width = Math.min(100, ((i+1)/steps.length)*100) + '%';
      }

      //await fakeStep('Abbruch. Ergebnis: Es passiert nichts Echtes.');
      bar.style.width = '100%';
      //reveal.style.display = 'block';
      startBtn.disabled = false;
    }