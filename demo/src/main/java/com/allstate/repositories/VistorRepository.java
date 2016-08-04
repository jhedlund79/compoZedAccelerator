package com.allstate.repositories;


import com.allstate.models.Visitor;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface VistorRepository extends MongoRepository<Visitor, String>{
}
