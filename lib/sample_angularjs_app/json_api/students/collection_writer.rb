module SampleAngularjsApp
  module JsonApi
    module Students
      # ColProductslection Writer class
      class CollectionWriter < SampleAngularjsApp::JsonApi::Students::Writer
        def build_resource
          resource.map do |student|
            build_single_resource(student)
          end
        end
      
        def build_linked_resources
          {}
        end
      end
    end
  end
end
