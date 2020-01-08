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

  Scenario: Add task with empty description
    When John adds the task ""
    Then John should see that adding the task is not possible
    And John should see that he has to provide a description
