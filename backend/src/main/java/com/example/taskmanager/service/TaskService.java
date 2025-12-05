package com.example.taskmanager.service;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAllTasks() { return repo.findAll(); }
    public Task addTask(Task task) { return repo.save(task); }
    public Task updateTask(Task task) { return repo.save(task); }
    public void deleteTask(Long id) { repo.deleteById(id); }
}
