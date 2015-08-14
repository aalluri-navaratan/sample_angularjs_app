module SampleAngularjsApp
  module JsonApi
    module Students
      # Single Writer class
      class SingleWriter < SampleAngularjsApp::JsonApi::Students::Writer
        def build_resource
          build_single_resource(@resource)
        end
      end
    end
  end
end
