class Counter
{
  constructor(quill, options)
  {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on('text-change', this.update.bind(this));
    this.update();
  }

  calculate()
  {
    let text = this.quill.getText().trim();
    let woorden = text.split(/\s+/).length;
    let karakters = text.length;

    if (woorden > 1 && karakters > 1)
    {
      return woorden + " Woorden " + " en " + karakters + " Karakters";
    }
    else if (woorden === 1 && karakters === 1)
    {
      return woorden + " Woord " + " en " + karakters + " Karakter";
    }
    else
    {
      return 0 + " Woorden " + " en " + karakters + " Karakters";
    }
   }

  update()
  {
    var length = this.calculate();
    var label = "";
    this.container.innerText = length + ' ' + label;
  }
}

Quill.register('modules/counter', Counter);

var quill = new Quill('#editor',
{
  modules:
  {
    
    counter:
    {
      container: '#counter'
    }
  },
  theme: 'snow'
});

