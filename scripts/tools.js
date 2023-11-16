const competencesDiv = document.getElementById('competencesDiv');

class Tool {
    constructor(tool, nbr) {
        this.tool = tool;
        this.nbr = nbr;

        this.createToolElement();
    }

    createToolElement() {
        this.Tcard = document.createElement('div');

        this.toolName = document.createElement('h4');
        this.toolName.innerHTML = this.tool;

        this.toolValue = document.createElement('p');
        this.toolValue.innerHTML = this.nbr;

        this.img = document.createElement('img');
        this.img.src = `../src/logos/${this.tool}.png`;
        this.img.alt = `logo de ${this.tool}`;

        this.progressBarFix = document.createElement('div');
        this.progressBarFix.classList.add('progressBarFix');

        this.progressBar = document.createElement('div');
        this.progressBar.classList.add('progressBar');
        this.progressBar.style.width = this.nbr + '%';

        this.progressBarFix.appendChild(this.progressBar);

        this.Tcard.appendChild(this.img);
        this.Tcard.appendChild(this.toolName);
        this.Tcard.appendChild(this.progressBarFix);
        this.Tcard.appendChild(this.toolValue);

        competencesDiv.appendChild(this.Tcard);
    }
}

new Tool('HTML', 80);
new Tool('CSS', 85);
new Tool('JS', 70);
new Tool('Sass', 65);
new Tool('Angular', 50);
new Tool('React', 70);