package com.allstate.models;


import org.springframework.data.annotation.Id;

import java.util.Comparator;
import java.util.Date;


public class Visitor implements Comparator<Visitor>, Comparable<Visitor>{

    @Id
    private String id;

    private String name;
    private Date date;
    private String url;


    public Visitor(String name, Date date, String url) {
        this.name = name;
        this.date = date;
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public String getUrl() {
        return url;
    }

    @Override
    public String toString() {
        return "Visitor{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", date=" + date.toString()+
                '}';
    }


    @Override
    public int compareTo(Visitor o) {

        return this.name.compareTo(o.getName());
    }

    @Override
    public int compare(Visitor o1, Visitor o2) {
        return o1.getName().compareTo(o2.getName());
    }
}
