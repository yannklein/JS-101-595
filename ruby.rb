# puts "Hello"

name = "Massim"
age = 21

p "Massim Kenn Luke Ayaka Machiko".split

p "#{name} is #{age}"

students = ["Allan", "Thomas", "Emi", "Ryan"]

# CRUD

# Create
students.push("Abdul")
students << "Jose"
p students

# Read
p students[1]

# Update
students[1] = "Super Thomas"
p students

# Delete
students.delete_at(1)
p students

students.each do |student|
 puts "#{student} is amazing!"
end

age = 18

if age == 18
  puts "Time to get your driving license!"
elsif age > 18
  puts "You can drive"
else
  puts "Not there yet!"
end

number = 42

def square(num)
  num * num
end

puts square(number)
