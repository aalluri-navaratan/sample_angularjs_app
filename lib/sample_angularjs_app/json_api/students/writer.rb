module SampleAngularjsApp
  module JsonApi
    module Students
      # Writer class
      class Writer < SampleAngularjsApp::JsonApi::BaseWriter
        def build_links
          {}
        end

        def build_single_resource(student)
          HashBuilder.build(scope: self) do
            id student.id
            sid student.sid
            sname student.sname
            semail student.semail
            smobile student.smobile
          end
        end

        def build_links_with_ids(_students)
          {}
        end

        def build_linked_studentss
          {}
        end
      end
    end
  end
end
