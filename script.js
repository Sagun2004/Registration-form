  
    function handleSubmit(e) {
      e.preventDefault();
      document.getElementById('successMsg').style.display = 'block';
      e.target.reset();
      setTimeout(() => {
        document.getElementById('successMsg').style.display = 'none';
      }, 3500);
    }
