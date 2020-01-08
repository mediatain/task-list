Feature: Toggle Task

  In order to keep track of what I did
  As a user
  I can toggle a task between done and undone

  Scenario: Task are undone by default
    When John adds the task "buy milk"
    Then John's list should show a task "buy milk" as undone

  Scenario: Toggle task to done
    Given John has added the task "buy milk"
    When John toggles the task "buy milk"
    Then John's list should show a task "buy milk" as done

  Scenario: Toggle task to undone
    Given John has added the task "buy milk"
    And John has toggled the task "buy milk"
    When John toggles the task "buy milk"
    Then John's list should show a task "buy milk" as undone
