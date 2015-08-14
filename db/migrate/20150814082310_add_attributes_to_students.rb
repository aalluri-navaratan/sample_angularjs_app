class AddAttributesToStudents < ActiveRecord::Migration
  def up
    create_table :students do |t|
      t.integer :sid
      t.string :sname
      t.string :semail
      t.integer :smobile
      t.timestamps  
    end
  end

  def down
    drop_table :students
  end

end