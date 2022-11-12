    let counter = 1;
    setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      if( counter > 11  ) {
        counter = 0;
      }
      counter++;
    }, 2000);
  