# {{PROBLEM}} Multi-Class Planned Design Recipe

## 1. Describe the Problem

As a user
So that I can record my experiences
I want to keep a regular diary

As a user
So that I can reflect on my experiences
I want to read my past diary entries

As a user
So that I can reflect on my experiences in my busy day
I want to select diary entries to read based on how much time I have and my reading speed

As a user
So that I can keep track of my tasks
I want to keep a todo list along with my diary

As a user
So that I can keep track of my contacts
I want to see a list of all of the mobile phone numbers in all my diary entries

## 2. Design the Class System

_Consider diagramming out the classes and their relationships. Take care to
focus on the details you see as important, not everything. The diagram below
uses asciiflow.com but you could also use excalidraw.com, draw.io, or miro.com_

```
 ┌──────────┐
 │          │
 │ VERBS    │
 │ record   │
 │ reflect  │
 │ read     │
 │ select   │
 │ keep     │
 └──────────┘


┌───────────────┐           ┌────────────────┐             ┌──────────────────┐
│ CONTACTS      │           │ DIARY          │             │  ENTRIES         │
│               │OWNS A LIST│                │ OWNS A LIST │                  │
│ - all         │   OF...   │ - all          │     OF...   │ - new(title    ──┘
│ - add(number, ├──────────►│ - reading_chunk├────────────►│  content, number)
│  entry)       │           │ (wpm, minutes) │             │ - reading_time ──┐
│ - new         │           │ - add          │             │ - reading_chunk  │
│               │           │ - new          │             │ (wpm, minutes)   │
│               │           │                │             │                  │
└───────────────┘           └────────────────┘             └──────────────────┘




                            ┌────────────────┐             ┌────────────────┐
                            │ TODO LIST      │             │  TASKS         │
                            │                │  OWNS A LIST│                │
                            │                │    OF...    │  - new         │
                            │ - add          ├────────────►│  - title       │
                            │ - complete     │             │  - complete?   │
                            │ - incomplete   │             │                │
                            │ - new          │             │                │
                            │                │             │                │
                            └────────────────┘             └────────────────┘
```

_Also design the interface of each class in more detail._

```ruby
class Diary
  def initialize
    #empty diary
  end

  def all
    #returns diary of entries based on their title and content
  end

  def add(entry)
    #adds entry to diary
  end

  def reading_chunk(wpm, minutes)
    #returns entry based on user's wpm and minutes
  end

  def all_phone
    #returns numbers of all entries within diary
  end

end

class Entries

  def intialize
    #title
    #content
    #number
  end

  def word_count
    #returns number of words within an entry
  end

  def reading_chunk(wpm, minutes)
    #given a user's time availble and reading speed,
    #returns chunk of entry that it is possible to read
  end

  def content
    #return contents as a string
  end

  def phone
    #return number of an entry as a string
  end

end

class TodoList
  def initialize
    #empty list
  end

  def all
    #returns list of all tasks
  end

  def add(task)
    #add task to list
  end

  def complete
    #return list of completed tasks
  end
end

class Todos
  def initialize
    #task as a string
    #complete
  end

  def complete?
    #mark task as complete
  end

  def task
    #return task as a string
  end

end

```

## 3. Create Examples as Integration Tests

_Create examples of the classes being used together in different situations and
combinations that reflect the ways in which the system will be used._

```ruby
# EXAMPLE
#integration_spec.rb
#2 Given one entry, return diary with one entry
diary = Diary.new
entry_one = Entries.new('my_name','my_content','0203453867')
diary.add(entry_one)
result = diary.all # => ['Deep thoughts']

#3 Given wpm and minutes, return best reading chunk
diary = Diary.new
entry_one = Entries.new('name_one','content_one','0203453867')
entry_two = Entries.new('name_two','content two','0203455297')
entry_three = Entries.new('name_three','content is three','0203453164')
diary.add(entry_one)
diary.add(entry_two)
diary.add(entry_three)
result = diary.reading_chunk(3, 1) # => [entry_three]

#4 Given two entries, return diary with number of two entries
diary = Diary.new
entry_one = Entries.new('name_one','content_one','0203453867')
entry_two = Entries.new('name_two','content two','0203455297')
diary.add(entry_one)
diary.add(entry_two)
result = diary.all # => [entry_one, entry_two]

#10 Given one task, return todo_list with one task
todo_list = TodoList.new
task = Todos.new('my_task', @complete)
todo_list.add(task)
result = todo_list.all # => [task]

#11 Given two tasks, return todo_list with two tasks
todo_list = TodoList.new
task_one = Todos.new('task_one', false)
task_two = Todos.new('task_two', false)
todo_list.add(task_one)
todo_list.add(task_two)
result = todo_list.all # => [task_one, task_two]

#12 Given two completed tasks, return todo_list with two completed tasks
todo_list = TodoList.new
task_one = Todos.new('task_one', false)
task_two = Todos.new('task_two', false)
todo_list.add(task_one)
todo_list.add(task_two)
task_one.complete?
task_two.complete?
result = todo_list.complete # => [task_one, task_two]

```

## 4. Create Examples as Unit Tests

_Create examples, where appropriate, of the behaviour of each relevant class at
a more granular level of detail._

```ruby
#diary_spec.rb
#1 Given no entries, return a new, empty diary
diary = Diary.new
result = diary.all # => []

#entries_spec.rb
#5 Given an entry, return contents
entry = Entries.new('my_title','my_content','my_number')
result = entry.contents # => 'my_content'

#6 Given an entry, return word count
entry = Entries.new('my_title','here are some words','my_number')
result = entry.word_count # => 4

#7 Given an entry, wpm and minutes, return chunk of entry
entry = Entries.new('my_title','here are some words','my_number')
result = entry.reading_chunk(2,1) # => 'here are'

#8 Given an entry, return phone number
entry = Entries.new('my_title','my_content','my_number')
result = entry.number # => 'my_number'

#todo_list_spec.rb
#9 Given no tasks, return a new, empty task_list
todo_list = TodoList.new
result = todo_list.all # => []

#todos_spec.rb
#13 Given a task, return it as a string
entry = Todos.new('my_task')
result = entry.task # => 'my_task'

# EXAMPLE

# # Constructs a track
# track = Track.new("Carte Blanche", "Veracocha")
# track.title # => "Carte Blanche"
```

_Encode each example as a test. You can add to the above list as you go._

## 5. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green,
refactor to implement the behaviour._


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/golden-square&prefill_File=resources/multi_class_recipe_template.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/golden-square&prefill_File=resources/multi_class_recipe_template.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/golden-square&prefill_File=resources/multi_class_recipe_template.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/golden-square&prefill_File=resources/multi_class_recipe_template.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/golden-square&prefill_File=resources/multi_class_recipe_template.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->