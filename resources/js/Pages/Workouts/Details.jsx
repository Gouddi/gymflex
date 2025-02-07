import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ExercisesTable from "../Exercises/ExercisesTable";

export default function Details({
  auth,
  workout,
  exercises,
  queryParams = null,
  users,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {workout.name}
        </h2>
      }
    >
      <Head title={workout.name} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={workout.image_path}
                alt={workout.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-1">
                <div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">ID</label>
                    <p className="mt-1">{workout.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Workout name</label>
                    <p className="mt-1">{workout.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Description</label>
                    <p className="mt-1">{workout.description}</p>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created by</label>
                    <p className="mt-1">{workout.createdBy.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Creation date</label>
                    <p className="mt-1">{workout.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Updated by</label>
                    <p className="mt-1">{workout.updatedBy.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of exercises that belong to the workout */}
      <div className="pb-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <ExercisesTable exercises={exercises} queryParams={queryParams} users={users} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
