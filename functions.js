class Calculatrice {
    constructor(annee, jour_t, c_payes) {
        this.annne = annee;
        this.jour_t = jour_t;
        this.c_payes = c_payes;
    }

    annee_bissextile(annee) {
        if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) { // Si l'année est divisible entre 4 et 100 ou entre 400 donc 
            return 366
        }
        else {
            return 365;
        }

    }

    samEtdim(annee) {
        let dateDebut = new Date(annee, 0, 1);
        let dateFin = new Date(annee, 11, 31);
        let compteurSamEtDim = 0;
        let date = dateDebut;
        while (date <= dateFin) {
            if (date.getDay() === 6) {  //6 c'est le samedi
                compteurSamEtDim++;
            }
            else if (date.getDay() === 0) { //0 c'est le dimanche
                compteurSamEtDim++;
            }
            date.setDate(date.getDate() + 1); //On ajoute un jour au compteur du while
        }
        return compteurSamEtDim;
    }

    jours_feries(annee) {
        //Déclaration des dates des jours fériés.
        let j_an = new Date(annee, 0, 1);
        let paques = 1;
        let f_travail = new Date(annee, 4, 1);
        let v_1945 = new Date(annee, 4, 8);
        let j_asc = 1;
        let l_pent = 1;
        let f_national = new Date(annee, 6, 14);
        let assomption = new Date(annee, 7, 15);
        let toussaint = new Date(annee, 10, 1);
        let armistice = new Date(annee, 10, 11);
        let noel = new Date(annee, 11, 25);

        let jours_feries = 0;

        //On test que la date crée à partir de l'année ne soit pas ni samedi ni dimanche
        if (j_an.getDay() != 6 && j_an.getDay() != 0) {
            jours_feries++;
        }

        if (f_travail.getDay() != 6 && f_travail.getDay() != 0) {
            jours_feries++;
        }

        if (v_1945.getDay() != 6 && v_1945.getDay() != 0) {
            jours_feries++;
        }

        if (f_national.getDay() != 6 && f_national.getDay() != 0) {
            jours_feries++;
        }

        if (assomption.getDay() != 6 && assomption.getDay() != 0) {
            jours_feries++;
        }

        if (toussaint.getDay() != 6 && toussaint.getDay() != 0) {
            jours_feries++;
        }

        if (armistice.getDay() != 6 && armistice.getDay() != 0) {
            jours_feries++;
        }

        if (noel.getDay() != 6 && noel.getDay() != 0) {
            jours_feries++;
        }


        return jours_feries + paques + j_asc + l_pent;

    }
    // On appelle les functions crées à fin de retourner la valeur de RTT
    jours_rtt(annee, jour_t, c_payes) {

        let type_anne = this.annee_bissextile(annee);
        let nombre_sam_et_dim = this.samEtdim(annee);
        let jours_feries = this.jours_feries(annee);

        return type_anne - jour_t - nombre_sam_et_dim - jours_feries - c_payes;
    }

};

module.exports = Calculatrice;