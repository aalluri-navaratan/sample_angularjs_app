# Product Model
class Student < ActiveRecord::Base
	attr_accessor :sid, :sname, :semail, :smobile

	validates :sid, presence: true
	validates_presence_of :sname
	validates :semail, presence: true, semail: true
	validates :smobile, presence: true, uniqueness: true, length: { maximum: 10 }

end
