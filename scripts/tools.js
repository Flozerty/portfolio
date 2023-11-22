const competencesDiv = document.getElementById('competencesDiv');

class Tool {
    constructor(tool, nbr) {
        this.tool = tool;
        this.nbr = nbr;

        this.createToolElement();
    }

    createToolElement() {
        this.Tcard = document.createElement('div');

        this.toolName = document.createElement('p');
        this.toolName.classList.add('pName');
        this.toolName.innerHTML = this.tool;

        this.toolValue = document.createElement('p');
        this.toolValue.classList.add('pValue');
        this.toolValue.innerHTML = this.nbr;

        this.img = document.createElement('img');
        this.img.src = `./src/tools/${this.tool}.png`;
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

        this.Tcard.title = `${this.tool} : ${this.nbr}%`;

        competencesDiv.appendChild(this.Tcard);
    }
}

new Tool('HTML', 85);
new Tool('CSS', 90);
new Tool('JS', 80);
new Tool('Git', 85);
new Tool('Sass', 85);
new Tool('Angular', 70);
new Tool('node', 65);
new Tool('React', 50);