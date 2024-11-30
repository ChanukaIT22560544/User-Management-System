package com.UserManagementSystem.demo1.repository;

import com.UserManagementSystem.demo1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> { }
