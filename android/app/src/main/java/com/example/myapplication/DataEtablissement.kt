package com.example.myapplication

import android.os.Parcel
import android.os.Parcelable

data class DataEtablissement(
    var uai: String?, var libelle: String?, var type: String?, var secteur: String?, var commune: String?, var academie: String?,
    var adresse: String?, var zipCode: String?
) : Parcelable {

    constructor(parcel: Parcel) : this(
        parcel.readString(),
        parcel.readString(),
        parcel.readString(),
        parcel.readString(),
        parcel.readString(),
        parcel.readString(),
        parcel.readString(),
        parcel.readString()
    ) {
    }

    override fun writeToParcel(parcel: Parcel, flags: Int) {
        parcel.writeString(uai)
        parcel.writeString(libelle)
        parcel.writeString(type)
        parcel.writeString(secteur)
        parcel.writeString(commune)
        parcel.writeString(academie)
        parcel.writeString(adresse)
        parcel.writeString(zipCode)
    }

    override fun describeContents(): Int {
        return 0
    }

    companion object CREATOR : Parcelable.Creator<DataEtablissement> {
        override fun createFromParcel(parcel: Parcel): DataEtablissement {
            return DataEtablissement(parcel)
        }

        override fun newArray(size: Int): Array<DataEtablissement?> {
            return arrayOfNulls(size)
        }
    }

}