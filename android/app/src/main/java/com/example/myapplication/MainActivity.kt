package com.example.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val listFragment = ListFragment()
        supportFragmentManager.beginTransaction()
            .replace(R.id.container, listFragment)
            .commit()

        val infoFragment = InfoFragment()

        findViewById<Button>(R.id.button_info).setOnClickListener(){
            supportFragmentManager.beginTransaction()
                .replace(R.id.container, infoFragment)
                .addToBackStack(null)
                .commit()
        }

        findViewById<Button>(R.id.button_list).setOnClickListener(){
            supportFragmentManager.beginTransaction()
                .replace(R.id.container, listFragment)
                .addToBackStack(null)
                .commit()
        }
    }
}

