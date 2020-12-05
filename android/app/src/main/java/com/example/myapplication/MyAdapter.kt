package com.example.myapplication

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.AdapterView
import android.widget.ImageView
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.recyclerview.widget.RecyclerView

class MyAdapter(val list : Array<String>, val itemClickListener: View.OnClickListener)
    : RecyclerView.Adapter<MyAdapter.ViewHolder>() {

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val cardView = itemView.findViewById<CardView>(R.id.card_view)
        val icon = itemView.findViewById<ImageView>(R.id.icon)
        val name = itemView.findViewById<TextView>(R.id.name)
        val favorite_check = itemView.findViewById<ImageView>(R.id.favorite_check)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val viewItem = inflater.inflate(R.layout.item_recycler_view, parent, false)
        return ViewHolder(viewItem)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = list[position]
        holder.icon.setImageResource(R.mipmap.ic_launcher_round)
        holder.name.text = item
        holder.cardView.tag = position
        holder.cardView.setOnClickListener(itemClickListener)
        holder.favorite_check.setOnClickListener(){
            holder.favorite_check.setImageResource((R.drawable.filled_favorite))
        }
    }

    override fun getItemCount(): Int {
        return list.size
    }
}