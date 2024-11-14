package com.dipartimento.demowebapplications.persistence.dao.impljdbc;

import com.dipartimento.demowebapplications.model.Piatto;
import com.dipartimento.demowebapplications.persistence.DBManager;


public class PiattoProxy extends Piatto {

    public String getIngredienti() {
        if(this.ingredienti ==null){
            this.ingredienti= DBManager.getInstance().getPiattoDao().findByPrimaryKey(this.nome).getIngredienti();
        }
        return ingredienti;
    }
}
