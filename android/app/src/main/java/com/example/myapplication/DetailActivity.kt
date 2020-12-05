package com.example.myapplication

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class DetailActivity : AppCompatActivity() {
    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail)

        val etablissement = intent.getParcelableExtra<DataEtablissement>("etablissement")

        val uai = findViewById<TextView>(R.id.uai)
        val libelle = findViewById<TextView>(R.id.libelle)
        val type = findViewById<TextView>(R.id.type)
        val secteur = findViewById<TextView>(R.id.secteur)
        val commune = findViewById<TextView>(R.id.commune)
        val academie = findViewById<TextView>(R.id.academie)
        val adresse = findViewById<TextView>(R.id.adresse)
        val zipCode = findViewById<TextView>(R.id.zipCode)

        uai.text = "Identifiant UAI : ${etablissement?.uai}"
        libelle.text = "Nom de l'établissement : ${etablissement?.libelle}"
        type.text = "Type : ${etablissement?.type}"
        secteur.text = "Secteur : ${etablissement?.secteur}"
        commune.text = "Ville : ${etablissement?.commune}"
        academie.text = "Académie : ${etablissement?.academie}"
        adresse.text = "Adresse : ${etablissement?.adresse}"
        zipCode.text = "Code postal : ${etablissement?.zipCode}"


    }
}