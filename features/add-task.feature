Feature: Add Task

  In order to remember a task
  As a user
  I can add it to my task list

  Scenario: Add task
    When John adds the task "buy milk"
    Then John's list should show the task "buy milk"

  Scenario: Add task to non-empty list
    Given John has added the task "buy milk"
    When John adds the task "make coffee"
    Then John's list should show the task "buy milk"
    And John's list should show the task "make coffee"
