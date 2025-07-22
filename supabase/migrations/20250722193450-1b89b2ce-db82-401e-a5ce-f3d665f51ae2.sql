-- Rename profiles table to users
ALTER TABLE public.profiles RENAME TO users;

-- Update the trigger function to insert into users table instead of profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
begin
  insert into public.users (id, email, first_name, last_name, company)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    new.raw_user_meta_data ->> 'company'
  );
  return new;
end;
$function$;